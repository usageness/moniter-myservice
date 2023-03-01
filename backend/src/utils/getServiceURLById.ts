const serviceList = {
  blog_vercel: 'https://blog-usageness.vercel.app/',
  blog_tistory: 'https://usage.tistory.com/',
  thumbnail_generator: 'https://free-thumbnail-generator.vercel.app/',
  cors_proxy_server: 'https://blog-usageness.vercel.app/',
};

const getServiceURLById = (id: string): string => {
  const serviceURL = serviceList[id];

  if (!serviceURL) throw new Error('unknown arguments ID');

  return serviceURL;
};

export default getServiceURLById;
