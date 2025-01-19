/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"img.clerk.com"
            },
            {
                hostname:"cdn.sanity.io"
            }
        ]
    }
};

export default nextConfig;
