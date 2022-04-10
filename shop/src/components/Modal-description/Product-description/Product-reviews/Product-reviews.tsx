import React, {useEffect, useMemo} from "react";
import "./Product-reviews.scss"

interface PropsReview {
    author:string,
    avatar:string,
    rate:number,
    text:string
}

export function ProductReviews(props:{reviews:any}) {
    const newReviews:Array<PropsReview> = useMemo(() => {
        return Object.values(props.reviews)
    },[props.reviews])


    return (
        <>
            {newReviews.map((review:PropsReview, index:number) => {
                return (
                    <article className="review" key={index}>
                        <img className="review__photo" src={review.avatar} alt="avatar"/>
                        <div className="review__block">
                            <div className="review__header">
                                <span className="review__name">{review.author}</span>
                                <div>
                                    {[...Array(review.rate)].fill(0).map((item,index) => {
                                        return (
                                            <span key={index}>
                                                <svg  width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5468 5.72227L17.9471 6.03531C18.97 6.08748 19.3686 7.36199 18.5939 7.98806L14.3895 11.4315L15.7584 16.619C16.0141 17.5954 14.9235 18.3556 14.0812 17.8264L9.47815 14.9271L4.92027 17.8189C4.03276 18.3854 2.93466 17.5134 3.25807 16.5444L4.59685 11.3868L0.407516 7.98061C-0.382216 7.33963 0.0540168 6.08748 1.04682 6.02786L6.48469 5.69246L8.45526 0.698757C8.8238 -0.240357 10.1626 -0.225451 10.5311 0.698757L12.5468 5.72227ZM11.3961 6.9297C11.4562 7.08622 11.6067 7.18311 11.7721 7.18311H11.7947L16.8415 7.47379L12.8778 10.7234C12.7499 10.8278 12.7048 10.9992 12.7499 11.1557L12.7574 11.1781L14.036 16.0227L9.69626 13.2874C9.56088 13.1979 9.38037 13.2054 9.24499 13.3023L9.22995 13.3097L4.96539 16.0227L6.25153 11.0812C6.28913 10.9321 6.23649 10.7756 6.11615 10.6787L2.16749 7.46633L7.29698 7.1533C7.45493 7.14585 7.59031 7.04895 7.65048 6.89989L9.50823 2.18941L11.3961 6.9297Z" fill="#F1C450"/>
                                                </svg>
                                            </span>
                                        )
                                    })}

                                    {[...Array(5 - review.rate)].fill(0).map((item,index) => {
                                        return (
                                            <span key={index}>
                                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5468 5.72227L17.9471 6.03531C18.97 6.08748 19.3686 7.36199 18.5939 7.98806L14.3895 11.4315L15.7584 16.619C16.0141 17.5954 14.9235 18.3556 14.0812 17.8264L9.47815 14.9271L4.92027 17.8189C4.03276 18.3854 2.93466 17.5134 3.25807 16.5444L4.59685 11.3868L0.407516 7.98061C-0.382216 7.33963 0.0540168 6.08748 1.04682 6.02786L6.48469 5.69246L8.45526 0.698757C8.8238 -0.240357 10.1626 -0.225451 10.5311 0.698757L12.5468 5.72227ZM11.3961 6.9297C11.4562 7.08622 11.6067 7.18311 11.7721 7.18311H11.7947L16.8415 7.47379L12.8778 10.7234C12.7499 10.8278 12.7048 10.9992 12.7499 11.1557L12.7574 11.1781L14.036 16.0227L9.69626 13.2874C9.56088 13.1979 9.38037 13.2054 9.24499 13.3023L9.22995 13.3097L4.96539 16.0227L6.25153 11.0812C6.28913 10.9321 6.23649 10.7756 6.11615 10.6787L2.16749 7.46633L7.29698 7.1533C7.45493 7.14585 7.59031 7.04895 7.65048 6.89989L9.50823 2.18941L11.3961 6.9297Z" fill="#E4E4E4"/>
                                                </svg>
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                            <p className="review__txt">{review.text}</p>
                        </div>
                    </article>
                )
            })}

        </>
    )
}