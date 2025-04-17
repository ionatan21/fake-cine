// scrollRestore.ts

if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", () => {
    sessionStorage.setItem("scrollPos", window.scrollY.toString());
  });

  window.addEventListener("DOMContentLoaded", () => {
    const scrollPos = sessionStorage.getItem("scrollPos");
    if (scrollPos) {
      window.scrollTo({ top: parseInt(scrollPos), behavior: "auto" });
      sessionStorage.removeItem("scrollPos");
    }
  });
}
