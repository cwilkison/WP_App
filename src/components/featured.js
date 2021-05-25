import React from "react";
import Carrousel from "./carrousel";

const Featured = () => {
  const corrouselItems = [
    {
      img: "https://lh3.googleusercontent.com/orvrNvSwIO5JIYfGiBLzqnIXKzRwWdKGnbjs11A8rmZe2xObRAFN9TD_AmB-Gculau_7PEe5XdC0OqMlkjRdyQQB863G9WD7XejSSZ0ZJ-iBBhaaY78hAShuZqBvVxJF4BNtQ-zr4Q=w2400",
      lineOne: "The Best",
      lineTwo: "is Yet to Come!",
      lineTitle: "Build",
    },
    {
      img: "https://lh3.googleusercontent.com/4gs6AJkfEHvcSE_VoDZdqfN_muHztv_sOFq3typcRu2jncdcQP53YWZBjxtyO04qFLs-YFPiS6yPZ8B7MJ6CCxhVVAqzlZO1BigNM0Q8IUiavR9iwKrH0Z9K-j0hIxZ0o4Hzvss1Jw=w2400",
      lineOne: "Developing",
      lineTwo: "Lifestyle Communities",
      lineTitle: "Build",
    },
    {
      img: "https://lh3.googleusercontent.com/at67sSMETIzv_dLX67P1Q3VIKD00eburQZAYGd-Q9N-3f3TXpW6iaiBQxpRy59a2PWQaI9ujNGEax6dHWVI7orAENidrr1040G-8aeBoA2qyzCfEYHzwK2W2j4DShLcGK05F5hAF8Q=w2400",
      lineOne: "Tennis2",
      lineTwo: "Quality Houses2",
      lineTitle: "Build",
    },
    {
      img: "https://lh3.googleusercontent.com/yOIK23FGZBYrHwUY0WUFwNeCbe8cyXRs0qOy1yupqhU4HxDj4_iqPZqT1wD9qF8KArjg3sntM9AIgb62y7atae900eOw3Y6-fDmjN-MqJpLuCeF5Zv_VKIEq6JFp-RefzdHIFBmqnw=w2400",
      lineOne: "Tennis2",
      lineTwo: "Quality Houses2",
      lineTitle: "Build",
    },
  ];

  return (
    <div className="featured_container">
      <Carrousel items={corrouselItems} />
    </div>
  );
};

export default Featured;
