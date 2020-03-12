//List down quotes and author in an object
const scriptures = [
  {
    scripture:
      "Behold! what manner of love,the Father has bestowed on us that we should be called sons of God.",
    verse: "1 John 3:1"
  },
  {
    scripture:
      "But as many as received Him, to them He gave power to become the sons ofGod, even to them that believed in His Name.",
    verse: "John 1:12"
  },
  {
    scripture:
      "In the beginning was the Word, and the Word was with God, and the Word was God.",
    verse: "John 1:1"
  },
  {
    scripture: "In the beginning, God created the Heavens and the earth.",
    verse: "Genesis 1:1"
  },
  {
    scripture:
      "Come to Me, all you who labour and are heavy laden,and i will give you rest . Take My yoke upon you and learn of me and you will find rest for your souls.",
    verse: "Matthew 11:28"
  },
  {
    scripture: "And Jesus wept.",
    verse: "John 11:35"
  }
];
//assign the generate-btn id to a variable
const btn = document.getElementById("generate-btn");

// create a function to handle the quote generation
btn.addEventListener("click", function() {
  //create a variable to generate random numbers
  let random = Math.floor(Math.random() * scriptures.length);
  console.log(random);

  document.getElementById("scripture").textContent =
    scriptures[random].scripture;
  document.querySelector(".verse").textContent = scriptures[random].verse;
});
