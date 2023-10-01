function onceImageErrored(event, size) {
  const target = event.target;
  target.src = `https://via.placeholder.com/${size}`;
}
export { onceImageErrored as o };
