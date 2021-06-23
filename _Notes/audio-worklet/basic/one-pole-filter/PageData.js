

export default {
  TopBar: {
    pathData: [
      ["Home", "../../../"],
      ["AudioWorklet", "../../"],
      ["One Pole Filter"],
    ],
  },

  Description: {
    title: "One Pole Filter",
    detail: `A one pole filter implementation with AudioWorkletNode. A noise
      generator goes into an one-pole filter and a series of AudioParam
      automations is in action to move the filter frequency.`,
  },
};
