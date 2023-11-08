const button = document.querySelector('button');
button?.addEventListener('click', handleClick);

function handleClick(e: MouseEvent) {
  console.log(e.target);
}