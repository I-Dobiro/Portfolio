const days = [3, 4, 5, 6, 7];

const descriptions = days.map(day => document.getElementById(`description-day${day}`));
const icons = days.map(day => document.getElementById(`icon-day${day}`));

function showWeather() {
  days.forEach((day, index) => {
    icons[index].src = getIconSrc(descriptions[index].textContent);
  });
}
