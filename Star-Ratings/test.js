var rating = document.querySelector('[itemprop=ratingValue]').textContent;
    var number_of_reviews = document.querySelector('[itemprop=reviewCount]').textContent;
    const starsTotal = 5;

    document.addEventListener('DOMContentLoaded', getRatings);
      getRatings();

    function getRatings() {
        const starPercentage = (rating / starsTotal) * 100;
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        document.querySelector(`.ratings .stars-inner`).style.width = starPercentageRounded;
        document.querySelector(`.ratings .number-rating`).innerHTML = rating;
        document.querySelector(`.ratings .number-reviews`).innerHTML = number_of_reviews;
    }