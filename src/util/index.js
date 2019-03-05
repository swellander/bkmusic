export function isMobileDevice() {
  if (typeof window === "undefined") return false;
  else
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
}
