"use server";

export default async function submitRecipe(formData: any) {
  const response = await fetch("public/data/recipes.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    console.error("Failed to submit recipe");
  } else {
    console.log("Recipe submitted successfully");
  }
};

