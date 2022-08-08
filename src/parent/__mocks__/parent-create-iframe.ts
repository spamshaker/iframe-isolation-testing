const eventType = 'message';
const dispatchMessage = (source: Window) => ({source: _source, data}: MessageEvent) =>
  !_source && self.dispatchEvent(new MessageEvent(eventType, {
    source,
    data,
    origin
  }));

window.top!.addEventListener(eventType, dispatchMessage(self));
window.addEventListener(eventType, dispatchMessage(self.top!));

declare global {
  interface Window {
    iframe: HTMLIFrameElement;
  }
}
export const iframe: HTMLIFrameElement = window.iframe;
