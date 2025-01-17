import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";

type TRating = {
  rating: number;
};

const RatingTemp = ({ rating }: TRating) => {
  if (rating === 5) {
    return (
      <>
        <span className="text-[#FD8C00]">
          <AiFillStar />
        </span>
        <span className="text-[#FD8C00]">
          <AiFillStar />
        </span>
        <span className="text-[#FD8C00]">
          <AiFillStar />
        </span>
        <span className="text-[#FD8C00]">
          <AiFillStar />
        </span>
        <span className="text-[#FD8C00]">
          <AiFillStar />
        </span>
      </>
    );
  } else if (rating === 4) {
    return (
      <>
        <span className="text-[#FD8C00]">
          <AiFillStar />
        </span>
        <span className="text-[#FD8C00]">
          <AiFillStar />
        </span>
        <span className="text-[#FD8C00]">
          <AiFillStar />
        </span>
        <span className="text-[#FD8C00]">
          <AiFillStar />
        </span>
        <span className="text-slate-600">
          <CiStar />
        </span>
      </>
    );
  } else if (rating === 3) {
    return (
      <>
        <span className="text-[#FD8C00]">
          <AiFillStar />
        </span>
        <span className="text-[#FD8C00]">
          <AiFillStar />
        </span>
        <span className="text-[#FD8C00]">
          <AiFillStar />
        </span>
        <span className="text-slate-600">
          <CiStar />
        </span>
        <span className="text-slate-600">
          <CiStar />
        </span>
      </>
    );
  } else if (rating === 2) {
    return (
      <>
        <span className="text-[#FD8C00]">
          <AiFillStar />
        </span>
        <span className="text-[#FD8C00]">
          <AiFillStar />
        </span>
        <span className="text-slate-600">
          <CiStar />
        </span>
        <span className="text-slate-600">
          <CiStar />
        </span>
        <span className="text-slate-600">
          <CiStar />
        </span>
      </>
    );
  } else if (rating === 1) {
    return (
      <>
        <span className="text-[#FD8C00]">
          <AiFillStar />
        </span>
        <span className="text-slate-600">
          <CiStar />
        </span>
        <span className="text-slate-600">
          <CiStar />
        </span>
        <span className="text-slate-600">
          <CiStar />
        </span>
        <span className="text-slate-600">
          <CiStar />
        </span>
      </>
    );
  } else {
    return (
      <>
        <span className="text-slate-600">
          <CiStar />
        </span>
        <span className="text-slate-600">
          <CiStar />
        </span>
        <span className="text-slate-600">
          <CiStar />
        </span>
        <span className="text-slate-600">
          <CiStar />
        </span>
        <span className="text-slate-600">
          <CiStar />
        </span>
      </>
    );
  }
};

export default RatingTemp;
