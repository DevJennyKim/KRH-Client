import keyword_dict from '/src/data/keywordsDict.json';

const sortPosts = (userInput, posts) => {

  // Parse the user input into lowercase and split it into individual words
  const userInputWords = userInput.toLowerCase().split(/\s+/);

  // Function to check if any user input words match the keywords in the dictionary
  const getMatchingCategories = (inputWords) => {
    let matchedCategories = new Set();
    for (let category in keyword_dict) {
      inputWords.forEach((word) => {
        if (keyword_dict[category].includes(word)) {
          matchedCategories.add(category);
        }
      });
    }
    return Array.from(matchedCategories);
  };

  // Get the categories based on the user input
  const categories = getMatchingCategories(userInputWords);

  // Function to calculate a score based on keyword matches in post
  const calculateMatchScore = (post) => {
    let score = 0;
    categories.forEach((category) => {
      let categoryMatched = false;
      post.keywords.split(',').forEach((keyword) => {
        if (
          !categoryMatched &
          (category === keyword.trim() ||
            keyword_dict[category].includes(keyword.trim()))
        ) {
          score += 20; // Increase score for each matched keyword
          categoryMatched = true;
        }
        score += Math.floor(Math.random() * 5) + 1; // Add some randomness
      });
    });
    return score;
  };

  // Sort the posts, prioritizing those with matching keywords
  const sortedPosts = [...posts].sort((a, b) => {
    const aScore = calculateMatchScore(a);
    const bScore = calculateMatchScore(b);
    return bScore - aScore; // Sort in descending order based on score
  });

  return sortedPosts;
};

export { sortPosts };
