// Loads Fancybox only on the first click on a gallery trigger, so its
// ~36 KiB chunk stays off the initial page load. After `initFancybox` binds
// a delegated listener on `document`, the original click is replayed.
let fancyboxPromise: Promise<void> | null = null;

function onFirstGalleryClick(event: MouseEvent): void {
	const trigger = (event.target as Element | null)?.closest<HTMLElement>("[data-fancybox]");

	if (!trigger) {
		return;
	}

	event.preventDefault();
	event.stopPropagation();

	if (fancyboxPromise) {
		return;
	}

	fancyboxPromise = import("./fancybox")
		.then(({ initFancybox }) => initFancybox())
		.then(() => {
			document.removeEventListener("click", onFirstGalleryClick, true);
			trigger.click();
		})
		.catch((error) => {
			fancyboxPromise = null;
			console.error("Failed to initialize Fancybox", error);
		});
}

export function initFancyboxOnDemand(): void {
	document.addEventListener("click", onFirstGalleryClick, true);
}
