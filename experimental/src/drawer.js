"use strict";

WaveSurfer.Drawer = {
  defaultParams: {
    waveColor: "#333",
    progressColor: "#999",
    cursorWidth: 1,
    loadingColor: "#333",
    loadingBars: 20,
    barHeight: 1,
    barMargin: 10,
    radius: 10,
  },

  init: function (params) {
    var my = this;
    this.params = Object.create(params);
    Object.keys(this.defaultParams).forEach(function (key) {
      if (!(key in params)) {
        params[key] = my.defaultParams[key];
      }
    });

    this.canvas = params.canvas;

    this.width = this.canvas.clientWidth;
    this.height = this.canvas.clientHeight;
    this.cc = this.canvas.getContext("2d");

    if (params.image) {
      this.loadImage(params.image, this.drawImage.bind(this));
    }

    if (!this.width || !this.height) {
      console.error("Canvas size is zero.");
    }
  },

  getPeaks: function (buffer) {
    // Frames per pixel
    var k = buffer.getChannelData(0).length / this.width;

    this.peaks = [];
    this.maxPeak = -Infinity;

    for (var i = 0; i < this.width; i++) {
      var sum = 0;
      for (var c = 0; c < buffer.numberOfChannels; c++) {
        var chan = buffer.getChannelData(c);
        var vals = chan.subarray(i * k, (i + 1) * k);
        var peak = -Infinity;
        for (var p = 0, l = vals.length; p < l; p++) {
          if (vals[p] > peak) {
            peak = vals[p];
          }
        }
        sum += peak;
      }
      this.peaks[i] = sum;

      if (sum > this.maxPeak) {
        this.maxPeak = sum;
      }
    }
  },

  progress: function (percents) {
    this.cursorPos = ~~(this.width * percents);
    this.redraw();
  },

  drawBuffer: function (buffer) {
    this.getPeaks(buffer);
    this.progress(0);
  },

  /**
   * Redraws the entire canvas on each audio frame.
   */

  redraw: function () {
    var my = this;
    this.clear();
    this.roundRectangle(0, 0, this.width, this.height, this.params.radius);
    // Draw WebAudio buffer peaks.
    if (this.peaks) {
      this.peaks.forEach(function (peak, index) {
        my.drawFrame(index, peak, my.maxPeak);
      });

      // Or draw an image.
    } else if (this.image) {
      this.drawImage();
    }

    //this.drawCursor();
  },

  clear: function () {
    this.cc.clearRect(0, 0, this.width, this.height);
  },

  drawFrame: function (index, value, max) {
    var w = 1;

    //subtract radius from height to reduce vertical range
    var h = Math.round(value * ((this.height - this.params.radius) / max));

    var x = index * w;
    var y = Math.round((this.height - h) / 2);

    this.cc.fillStyle = this.params.waveColor;

    this.cc.fillRect(x, y, w, h);
  },
  /*
    drawCursor: function () {
        var w = this.params.cursorWidth;
        var h = this.height;

        var x = Math.min(this.cursorPos, this.width - w);
        var y = 0;

        this.cc.fillStyle = this.params.cursorColor;
        this.cc.fillRect(x, y, w, h);
    },
    */

  /**
   * Loads and caches an image.
   */
  loadImage: function (url, callback) {
    var my = this;
    var img = document.createElement("img");
    var onLoad = function () {
      img.removeEventListener("load", onLoad);
      my.image = img;
      callback(img);
    };
    img.addEventListener("load", onLoad, false);
    img.src = url;
  },

  /**
   * Draws a pre-drawn waveform image.
   */
  drawImage: function () {
    var cc = this.cc;
    cc.drawImage(this.image, 0, 0, this.width, this.height);
    cc.save();
    cc.globalCompositeOperation = "source-atop";
    cc.fillStyle = this.params.progressColor;
    cc.fillRect(0, 0, this.cursorPos, this.height);
    cc.restore();
  },

  drawLoading: function (progress) {
    var color = this.params.loadingColor;
    var bars = this.params.loadingBars;
    var barHeight = this.params.barHeight;
    var margin = this.params.barMargin;
    var barWidth = ~~(this.width / bars) - margin;
    var progressBars = ~~(bars * progress);
    var y = ~~(this.height - barHeight) / 2;

    this.cc.fillStyle = color;
    for (var i = 0; i < progressBars; i += 1) {
      var x = i * barWidth + i * margin;
      this.cc.fillRect(x, y, barWidth, barHeight);
    }
  },

  roundRectangle: function (x, y, w, h, r) {
    //from http://stackoverflow.com/questions/1255512/how-to-draw-a-rounded-rectangle-on-html-canvas
    this.cc.strokeStyle = this.params.progressColor;
    this.cc.lineWidth = 1;
    this.cc.beginPath();
    this.cc.moveTo(x + r, y);
    this.cc.lineTo(x + w - r, y);
    this.cc.quadraticCurveTo(x + w, y, x + w, y + r);
    this.cc.lineTo(x + w, y + h - r);
    this.cc.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    this.cc.lineTo(x + r, y + h);
    this.cc.quadraticCurveTo(x, y + h, x, y + h - r);
    this.cc.lineTo(x, y + r);
    this.cc.quadraticCurveTo(x, y, x + r, y);
    this.cc.closePath();
    this.cc.fillStyle = "#E0E0E0";
    this.cc.fill();

    this.cc.stroke();
  },
};
