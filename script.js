function checkAnswer(button, correctAnswer) {
    // احصل على جميع الأزرار في السؤال
    const buttons = button.parentElement.querySelectorAll("button");

    // تحقق من الإجابة واخضر الأزرار الصحيحة
    buttons.forEach(btn => {
        if (btn.textContent === correctAnswer) {
            btn.classList.add("correct");
        } else {
            btn.classList.add("wrong");
        }
        btn.disabled = true; // تعطيل الأزرار بعد الاختيار
    });
}
