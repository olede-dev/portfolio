import "swiper/css";

import { initFancyboxOnDemand } from "./fancybox-loader";
import { initNetworkLinks } from "./network-links";
import { initReveal } from "./reveal";
import { initSwiper } from "./swiper";

const initAllPages = (): void => {
	initReveal();
	initNetworkLinks();
	initSwiper();
	initFancyboxOnDemand();
};

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initAllPages, { once: true });
} else {
	initAllPages();
}
