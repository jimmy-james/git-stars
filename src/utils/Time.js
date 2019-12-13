const timeAgo = (() => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const thresholds = [
    { threshold: 540 * day, modifier: 365 * day, render: elapsed => `${elapsed} years ago` },
    { threshold: 320 * day, render: () => 'a year ago' },
    { threshold: 45 * day, modifier: 30 * day, render: elapsed => `${elapsed} months ago` },
    { threshold: 26 * day, render: () => 'a month ago' },
    { threshold: 36 * hour, modifier: 24 * hour, render: elapsed => `${elapsed} days ago` },
    { threshold: 22 * hour, render: () => 'a day ago' },
    { threshold: 90 * minute, modifier: 60 * minute, render: elapsed => `${elapsed} hours ago` },
    { threshold: 45 * minute, render: () => 'an hour ago' },
    { threshold: 90 * second, modifier: 60 * second, render: elapsed => `${elapsed} minutes ago` },
    { threshold: 46 * second, render: () => 'a minute ago' },
    { threshold: 0 * second, render: () => 'a few seconds ago' },
  ];

  return date => {
    const elapsed = Math.round(new Date() - date);
    const { render, modifier } = thresholds.find(({ threshold }) => elapsed >= threshold);
    return render(Math.round(elapsed / modifier));
  };
})();

/**
 * Returns a boolean indicting whether a 'date' is valid
 * @type {function}
 * @param {string|Object} A string date or a Date object
 * @returns {boolean} true or false
 */
export function isValidDate(date) {
    if (date === null) return false;
    const newDate = new Date(date);
    return String(newDate) !== 'Invalid Date';
}

/**
 * Creates a formatted time string from a timestamp
 * @type {function}
 * @param {string} A formatted timestamp string like '2017-03-02T00:00:00.000Z'
 * @returns {string} A formatted datePublished string like 'Mon, Nov 13 2017 • 2:15 PM EST'
 */
const getDate = date => {
    let datePublished = date;
    if (!datePublished || !isValidDate(date)) return null;

    const isGMT = /(.*) (GMT)/.exec(datePublished);
    if (isGMT) datePublished = new Date(`${isGMT[1]}Z`);

    return new Date(datePublished);
};

export function timestampToMomentAgo(date) {
    const momentDate = getDate(date);
    if (!isValidDate(momentDate)) return '';
    return momentDate ? timeAgo(momentDate) : '';
}
