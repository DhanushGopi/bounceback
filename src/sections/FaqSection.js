export default function FaqSection(){

    const showans1 = () => {
        document.querySelector('.faqanswer1').classList.remove('hide')
        document.querySelector('.closeans1').classList.remove('hide')
        document.querySelector('.openans1').classList.add('hide')

    
    }

    
    const closeans1 = () => {
        document.querySelector('.faqanswer1').classList.add('hide')
        document.querySelector('.openans1').classList.remove('hide')
        document.querySelector('.closeans1').classList.add('hide')
    }

    const showans2 = () => {
        document.querySelector('.faqanswer2').classList.remove('hide')
        document.querySelector('.closeans2').classList.remove('hide')
        document.querySelector('.openans2').classList.add('hide')

    }

    
    const closeans2 = () => {
        document.querySelector('.faqanswer2').classList.add('hide')
        document.querySelector('.openans2').classList.remove('hide')
        document.querySelector('.closeans2').classList.add('hide')
    }

    const showans3 = () => {
        document.querySelector('.faqanswer3').classList.remove('hide')
        document.querySelector('.closeans3').classList.remove('hide')
        document.querySelector('.openans3').classList.add('hide')
    }

    
    const closeans3 = () => {
        document.querySelector('.faqanswer3').classList.add('hide')
        document.querySelector('.openans3').classList.remove('hide')
        document.querySelector('.closeans3').classList.add('hide')
    }

    
    return(
        <div className="faqsection">
            <h2 className="title">Frequently asked Questions?</h2>
            <div className="faq">
                <div className="faqquestion">
                    <p className="faqquestiontext">1. How does this platform help me connect with a physiotherapist?</p>
                    <div className="faqshowbtns">
                    <p className="material-symbols-outlined openans1" onClick={showans1}>keyboard_arrow_down</p>
                    <p className="material-symbols-outlined closeans1 hide" onClick={closeans1}>keyboard_arrow_up</p>
                    </div>
                </div>
                <p className="faqanswer faqanswer1 hide">Our platform connects you with licensed physiotherapists who provide customized consultations based on your needs. You can chat with them, get tailored regimen plans, and track your progress through a user-friendly dashboard.</p>
            </div>
            <div className="faq">
                <div className="faqquestion">
                    <p className="faqquestiontext">2. Can I access my customized exercise plan anytime?</p>
                    <div className="faqshowbtns">
                    <p className="material-symbols-outlined openans2" onClick={showans2}>keyboard_arrow_down</p>
                    <p className="material-symbols-outlined closeans2 hide" onClick={closeans2}>keyboard_arrow_up</p>
                    </div>
                </div>
                <p className="faqanswer faqanswer2 hide">Absolutely! Your personalized exercise plan is available on the platform 24/7. You can view, follow, and update your progress anytime, anywhere.</p>
            </div>
            <div className="faq">
                <div className="faqquestion">
                    <p className="faqquestiontext">3. Is the consultation secure and private?</p>
                    <div className="faqshowbtns">
                    <p className="material-symbols-outlined openans3" onClick={showans3}>keyboard_arrow_down</p>
                    <p className="material-symbols-outlined closeans3 hide" onClick={closeans3}>keyboard_arrow_up</p>
                    </div>
                </div>
                <p className="faqanswer faqanswer3 hide">Yes! We prioritize your privacy. All consultations and messages between you and your physiotherapist are encrypted to ensure complete confidentiality.

</p>
            </div>
        </div>
    )
}