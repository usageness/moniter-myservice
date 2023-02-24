const getServiceURLById = (id: string) => {
  switch (id) {
    case 'blog_vercel':
      return 'https://blog-usageness.vercel.app/';
    case 'blog_tistory':
      return 'https://usage.tistory.com/';
    case 'thumbnail_generator':
      return 'https://free-thumbnail-generator.vercel.app/';
    case 'cors_proxy_server':
      return 'https://cors.teamcrazyperformance.com/';
    default:
      throw new Error('unknown arguments ID');
  }
};

export default getServiceURLById;
