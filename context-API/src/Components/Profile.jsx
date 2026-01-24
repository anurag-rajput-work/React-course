import React, { useContext } from "react";
import Context from "../context/Context";

function Profile() {
  const { User } = useContext(Context);

  return (
    <div className="min-h-screen flex items-start justify-center
                    bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 -mt-24">

      {!User ? (
        /* Not Logged In */
        <div className="w-full max-w-sm backdrop-blur-xl bg-white/20
                        border border-white/30 rounded-2xl shadow-2xl p-8 text-center">

          <h1 className="text-2xl font-bold text-white mb-2">
            Access Denied
          </h1>
          <p className="text-white/80">
            Please login to view your profile
          </p>

        </div>
      ) : (
        /* Logged In */
        <div className="w-full max-w-sm backdrop-blur-xl bg-white/20
                        border border-white/30 rounded-2xl shadow-2xl p-8 text-center">

          <div className="w-20 h-20 mx-auto mb-4 rounded-full 
                          bg-gradient-to-r from-purple-600 to-pink-600
                          flex items-center justify-center text-3xl font-bold text-white">
            {User.Username?.charAt(0).toUpperCase()}
          </div>

          <h1 className="text-2xl font-bold text-white mb-1">
            Welcome Back
          </h1>

          <p className="text-lg text-white/90">
            {User.Username}
          </p>

        </div>
      )}
    </div>
  );
}

export default Profile;
