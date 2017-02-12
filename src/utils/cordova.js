export function insideCordova () {
  return !!window.cordova
}

export function getDevice () {
  return window.device || { uuid: "XXXX" }
}
