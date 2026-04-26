import portfolioData from "../data/portfolioData.json";

export const usePortfolioData = () => {
  const data = portfolioData;

  const getAllCategories = () => {
    const categories = [...data.categories].sort(
      (a, b) => a.displayOrder - b.displayOrder,
    );

    return categories;
  };

  const getProjectByCategory = (categorySlug) => {
    const category = data.categories.find(
      (category) => category.slug === categorySlug,
    );
    if (!category) return [];

    const project = data.projects
      .filter((project) => project.categoryId === category.id)
      .sort((a, b) => a.displayOrder - b.displayOrder);

    return project;
  };

  const getProjectById = (projectId) => {
    const project = data.projects.find(
      (project) => project.id === parseInt(projectId),
    );

    return project;
  };

  const getCategoryBySlug = (slug) => {
    const category = data.categories.find((category) => category.slug === slug);

    return category;
  };

  const getProjectCoverImage = (project) => {
    const coverImage =
      project.image.find((img) => img.isCoverImage) || project.image[0];

    return coverImage;
  };

  const getWorkExperience = () => {
    const experience = data.experience;

    return experience;
  };

  return {
    data,
    getAllCategories,
    getProjectByCategory,
    getProjectById,
    getCategoryBySlug,
    getProjectCoverImage,
    getWorkExperience,
  };
};
