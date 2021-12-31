const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(/*tempYear, tempMonth, tempDay + */2021, 11, 31, 24, 0, 0);

// let futureDate = new Date(2020, 3, 24, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveaway.textContent = `New year starts on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}0 AM`;

const futureTime = futureDate.getTime();
function getRemaindingTime() {
  const today = new Date().getTime();

  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h1 class="expired">Happy New Year</h1>`;
  }

  const time = document.querySelector(".time-left");
  if (days > 0){
    time.innerHTML = `<p class="time-left"><span class="high">${days}</span> days left until New Year, புத்தாண்டுக்கு <span class="high">${days}</span> நாட்கள் உள்ளன, අලුත් අවුරුද්ද සඳහා තවත් දින <span class="high">${days}</span> ඉතිරිව ඇත</p>`;
  } else if (hours > 0){
    time.innerHTML = `<p class="time-left"><span class="high">${hours}</span> hours left until New Year, புத்தாண்டுக்கு <span class="high">${hours}</span> மணிநேரம் உள்ளது, අලුත් අවුරුද්ද සඳහා තවත් පැය <span class="high">${hours}</span> ඉතිරිව ඇත</p>`;
  } else if (minutes > 0){
    time.innerHTML = `<p class="time-left"><span class="high">${minutes}</span> minutes left until New Year, புத்தாண்டுக்கு <span class="high">${minutes}</span> நிமிடங்கள் உள்ளது, අලුත් අවුරුද්ද සඳහා තවත් මිනිත්තු <span class="high">${minutes}</span> ඉතිරිව ඇත</p>`;
  } else if (seconds > 0){
    time.innerHTML = `<p class="time-left"><span class="high">${seconds}</span> minutes left until New Year, புத்தாண்டுக்கு <span class="high">${seconds}</span> நிமிடங்கள் உள்ளது, අලුත් අවුරුද්ද සඳහා තවත් මිනිත්තු <span class="high">${seconds}</span> ඉතිරිව ඇත</p>`;
  } else {
    time.innerHTML = `<p>
    Wish You A Very Happy New Year By Abdullah. Thanks For Visiting My Website. Check Me Out In <a href="https://instagram.com/abdullah_dybala_/" target="_blank">Instagram</a> & <a href="https://www.facebook.com/profile.php?id=100071801450008" target="_blank">Facebook</a> For More Info. Stay Home, Stay Safe.
  </p>
  <p>
    அப்துல்லாவின் இனிய புத்தாண்டு வாழ்த்துக்கள். எனது வலைத்தளத்தைப் பார்வையிட்டதற்கு நன்றி. மேலும் தகவலுக்கு <a href="https://instagram.com/abdullah_dybala_/" target="_blank">இன்ஸ்டாகிராம்</a> மற்றும் <a href="https://www.facebook.com/profile.php?id=100071801450008" target="_blank">பேஸ்புக்கில்</a> என்னைப் பார்க்கவும். வீட்டிலேயே இருங்கள், பாதுகாப்பாக இருங்கள்
  </p>
  <p>
    අබ්දුල්ලා විසින් ඔබට සුභ නව වසරක් පතමි. මගේ වෙබ් අඩවියට පිවිසීම ගැන ස්තුතියි. වැඩි විස්තර සඳහා <a href="https://instagram.com/abdullah_dybala_/" target="_blank">Instagram</a> සහ <a href="https://www.facebook.com/profile.php?id=100071801450008" target="_blank">Facebook</a> හි මාව පරීක්‍ෂා කරන්න. නිවසේ රැඳී සිටින්න, ආරක්ෂිතව සිටින්න
  </p>`
  }
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();
