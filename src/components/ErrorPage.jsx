import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h3 className="text-center mb-4">এই পেজ এখনো ডিজাইন করা হয়নি। </h3>
            <Link to='/' className="btn">Back To Home</Link>
            {/* Add additional content or buttons here */}
        </div>
    );
};

export default ErrorPage;
