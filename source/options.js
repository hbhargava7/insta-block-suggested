document.getElementById('enableFeature').addEventListener('change', function () {
    chrome.storage.sync.set({ enableFeature: this.checked });
  });