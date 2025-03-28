if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(`${location.origin}/sw.js`)
        .then((registration) => {
            console.log("✅ Service Worker Registered Successfully!");
            console.log("Scope:", registration.scope);
        })
        .catch((error) => {
            console.error("❌ Service Worker Registration Failed!", error);
        });
} else {
    console.warn("⚠️ This browser does not support Service Workers.");
}
