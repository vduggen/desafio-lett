export function handleDate(date) {
  const formatDate = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);

  return formatDate;
}

export function formatPrice(price) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(price) / 100);
}

export function handleActive(state) {
  const cartActive = document.querySelector("#cart");
  if (state) {
    cartActive.classList.add("active");
  } else {
    cartActive.classList.remove("active");
  }
}
