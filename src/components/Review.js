import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import Axios from "./../Utils/Axios";
import ProfileWidget from "./ProfileWidget";
import StarWidget from "./StartWidget/StarWidget";
import Loading from "./Loading/Loading";
import axios from "axios";
const Review = ({ rate }) => {
  const [user, setUser] = useState();
  
  useEffect(() => {
    const cancelUser = axios.CancelToken.source();
    Axios.get(`/users/user/${rate.user}`, { cancelToken: cancelUser.token })
      .then((res) => res.data)
      .then((data) => setUser(data.body))
      .catch((err) => err);
    return () => cancelUser.cancel();
  }, [rate.user]);
  
  return (
    <div>
      {user ? (
        <div className="border-pale p-3">
          <div className="row">
            <div className="col-md-3">
              <ProfileWidget image={user.avatar} name={user.first_name} />
            </div>
            <div className="col-md-9">
              <StarWidget align="end" singleRate={rate.rate} />
            </div>
          </div>
          <div className=" my-2 review-content" style={{ opacity: ".6" }}>
            {rate.feedback}
          </div>
        </div>
      ) : (
        <Loading size={4} />
      )}
    </div>
  );
};
Review.propTypes = {
  rate: PropTypes.object,
};

export default Review;
