import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

export function ToastProvider() {
  return <ToastContainer className="text-[0.875rem]" />;
}
