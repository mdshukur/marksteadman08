//  products read more toggole js
function toggleText() {
  const textElements = document.getElementsByClassName("text");

  Array.from(textElements).forEach((element) => {
    const content = element.innerHTML;
    const maxLength = 100; // Maximum number of characters to show

    if (content.length > maxLength) {
      const truncatedContent = content.slice(0, maxLength) + "...";
      const moreText = element.querySelector(".more-text");
      const readMoreLink = element.nextElementSibling;
      const readLessLink = element.nextElementSibling.nextElementSibling;

      element.innerHTML = truncatedContent;
      moreText.style.display = "inline";
      readMoreLink.style.display = "inline";

      readMoreLink.addEventListener("click", function (event) {
        event.preventDefault();
        element.innerHTML = content;
        moreText.style.display = "none";
        readMoreLink.style.display = "none";
        readLessLink.style.display = "inline";
      });

      readLessLink.addEventListener("click", function (event) {
        event.preventDefault();
        element.innerHTML = truncatedContent;
        moreText.style.display = "inline";
        readMoreLink.style.display = "inline";
        readLessLink.style.display = "none";
      });
    }
  });
}

// Call the function to toggle text when the page loads
document.addEventListener("DOMContentLoaded", toggleText);



// scroll top
document.addEventListener('DOMContentLoaded', function () {
    var scrollTopBtn = document.getElementById('scroll-top-btn');

    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    };

    scrollTopBtn.addEventListener('click', function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });

