(async () => {
  const $agree = document.getElementById('jsAgree');
  const $btns = document.getElementsByClassName('jsExecBtn');

  const onClickBtn = (ev) => {
    const agreed = $agree.checked;

    if (!agreed) {
      ev.preventDefault();
      alert("注意事項に同意してね");
      return;
    }
  };

  for (const $el of $btns) {
    $el.onclick = onClickBtn;
  }
})();
