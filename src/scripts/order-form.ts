const ORDER_EMAIL = "novitskaya230814@gmail.com";
const FORM_SUBMIT_URL = `https://formsubmit.co/ajax/${ORDER_EMAIL}`;

type FormStatus = "success" | "error" | "";

function setFormStatus(
  statusEl: HTMLDivElement | null,
  type: FormStatus,
  message: string,
): void {
  if (!statusEl) {
    return;
  }

  statusEl.textContent = message;
  statusEl.classList.remove("alert-success", "alert-danger", "d-none");

  if (!message) {
    statusEl.classList.add("d-none");
    return;
  }

  statusEl.classList.add(type === "success" ? "alert-success" : "alert-danger");
}

export function initOrderForm(): void {
  const form = document.querySelector<HTMLFormElement>(".y-order-form");

  if (!form) {
    return;
  }

  const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const statusEl = form.querySelector<HTMLDivElement>(".y-order-form-status");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!submitBtn) {
      return;
    }

    const formData = new FormData(form);

    const payload = {
      _subject: "New customer order",
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      comments: formData.get("comments") || "",
      _captcha: "false",
    };

    submitBtn.disabled = true;
    setFormStatus(statusEl, "", "");

    try {
      const response = await fetch(FORM_SUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        form.reset();
        setFormStatus(statusEl, "success", "Thank you! Your order has been sent.");
      } else {
        setFormStatus(statusEl, "error", "Something went wrong. Please try again.");
      }
    } catch {
      setFormStatus(
        statusEl,
        "error",
        "Network error. Please check your connection and try again.",
      );
    } finally {
      submitBtn.disabled = false;
    }
  });
}
