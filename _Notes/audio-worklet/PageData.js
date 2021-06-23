

export default {
  TopBar: {
    pathData: [["Home", "../"], ["Audio Worklet"]],
  },

  BasicDemo: {
    listTitle: "Basic Demo",
    listData: [
      {
        title: "Hello Audio Worklet!",
        description: `
            A simple AudioWorkletNode that bypasses its input to output`,
        url: "basic/hello-audio-worklet/",
      },
      {
        title: "One Pole Filter",
        description: `A one-pole filter built with Audio Worklet`,
        url: "basic/one-pole-filter/",
      },
      {
        title: "Noise Generator with AudioParam",
        description: `A noise generator with user-defined AudioParam`,
        url: "basic/noise-generator/",
      },
      {
        title: "BitCrusher with AudioParam",
        description: `An example from the specification, plus AudioParam
            automation`,
        url: "basic/bit-crusher/",
      },
      {
        title: "MessagePort",
        description: `Messaging between node and processor`,
        url: "basic/message-port/",
      },
      {
        title: "Handling Errors",
        description: `How to handle errors from processor`,
        url: "basic/handling-errors/",
      },
    ],
  },

  DesignPattern: {
    listTitle: "Advanced Design Pattern",
    listData: [
      {
        title: "Audio Worklet and WebAssembly",
        description: `A basic set up for AudioWorklet and WebAssembly`,
        url: "design-pattern/wasm/",
      },
      {
        title: "Ring Buffer in AudioWorkletProcessor",
        description: `Using Ring Buffer to work around buffer size mismatch`,
        url: "design-pattern/wasm-ring-buffer/",
      },
      {
        title: "Audio Worklet, SharedArrayBuffer and Worker",
        description: `For high performance, large-scale audio applications`,
        url: "design-pattern/shared-buffer/",
      },
    ],
  },

  Resources: {
    listTitle: "Resources",
    listData: [
      {
        title: "Enter Audio Worklet",
        description: `An introductory article on Audio Worklet`,
        url: "//developers.google.com/web/updates/2017/12/audio-worklet",
      },
      {
        title: "Audio Worklet Design Pattern",
        description: `Design with WebAssembly, SharedArrayBuffer and more`,
        url: "//developers.google.com/web/updates/2018/06/audio-worklet-design-pattern",
      },
      {
        title: "Talk: Audio Worklet - What, Why and How",
        description: `The first recorded talk on the Audio Worklet`,
        url: "//goo.gl/R2zWtR",
      },
      {
        title: "Deck: Audio Worklet - What, Why and How",
        description: `The slide deck for the recorded talk`,
        url: "//docs.google.com/presentation/d/11OZyHyWRTWOCETW4x7m5gCPNSdSl9HevCQ1aiR_0xFE/edit?usp=sharing",
      },
      {
        title: "Paper: Audio Worklet - The future of web audio",
        description: `The first conference paper about Audio Worklet
            (ICMC 2018)`,
        url: "//hoch.io/assets/publications/icmc-2018-choi-audioworklet.pdf",
      },
      {
        title: "Web Audio API: Audio Worklet",
        description: `Audio Worklet section in Web Audio API specification`,
        url: "//webaudio.github.io/web-audio-api/#AudioWorklet",
      },
    ],
  },
};
