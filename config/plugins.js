module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  
  upload: {
    config: process.env.NODE_ENV === 'production' ? {
      provider: "strapi-provider-firebase-storage",
      providerOptions: {
        serviceAccount: require("/config/firebase-service-account.json"),
        bucket: env("STORAGE_BUCKET_URL"),
        sortInStorage: true, 
        debug: false, 
      },
    } : {
      provider: 'local',
      providerOptions: {
        sizeLimit: 100000,
      },
    },
  },
});