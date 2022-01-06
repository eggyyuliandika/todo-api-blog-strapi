module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4466a0ff09dc96d3d17dc93904cb8930'),
  },
});
