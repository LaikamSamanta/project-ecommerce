import "bootstrap/dist/css/bootstrap.min.css";
import '../css/style.scss';
import { createInertiaApp } from "@inertiajs/react";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

void createInertiaApp({
  title: (title) => title ? `${title} - ${appName}` : appName,
});
