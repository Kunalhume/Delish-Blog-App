import "./singlePost.css";
import singleBgImg from "./../../assets/images/sunset.jpg";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={singleBgImg} alt="" />
        <h1 className="singlePostTitle">
          Delight your Life with Health way
          <div className="singlePostEdit">
            <i className="singlePostIcon">
              <ModeEditIcon />
            </i>
            <i className="singlePostIcon">
              <DeleteForeverIcon />
            </i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>Kunal Hume</b>
          </span>
          <span className="singlePostDate">1 day ago</span>
        </div>
        <p className="singlePostDesc">
          Ever since its release in 1989, Quantitative Aptitude has come to
          acquire a special place of respect and acceptance among students and
          aspirants appearing for a wide gamut of competitive exams. As a
          front-runner and a first choice, the book has solidly stood by the
          students and helped them fulfil their dreams by providing a strong
          understanding of the subject and even more rigorous practice of it.
          Now, more than a quarter of a century later, with the ever changing
          environment of examinations, the book too reinvents itself while being
          resolute to its core concept of providing the best content with easily
          understandable solutions. Following are the features of this revised
          and enlarged edition: 1. Comprehensive: With more than 5500 questions
          (supported with answers and solutions—a hallmark of Quantitative
          Aptitude) the book is more comprehensive than ever before. 2. Easy to
          follow: Chapters begin with easy-to-grasp theory complemented by
          formulas and solved examples. They are followed by a wide-ranging
          number of questions for practice. 3. Latest: With questions (memory
          based) from examinations up till year 2016, the book captures the
          latest examination patterns as well as questions for practice.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
