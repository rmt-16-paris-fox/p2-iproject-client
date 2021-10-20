<template>
  <div>
    <input type="checkbox" id="check" />
    <label class="chat-btn" for="check">
      <i class="fa fa-commenting-o comment"></i>
      <i class="fa fa-close close"></i>
    </label>
    <div class="wrapper">
      <div class="header">
        <h6>Let's Chat - Online</h6>
      </div>
      <div class="text-center p-2">
        <span>Please fill out the form to start chat!</span>
      </div>
      <div class="chat-form">
        <input type="text" class="form-control" placeholder="Name" />
        <input type="text" class="form-control" placeholder="Email" />
        <textarea
          class="form-control"
          placeholder="Your Text Message"
        ></textarea>
        <button class="btn btn-success btn-block">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatIcon",
};
</script>

<style>
body {
  background-color: #eee;
}

.chat-btn {
  position: absolute;
  right: 14px;
  bottom: 30px;
  cursor: pointer;
}

.chat-btn .close {
  display: none;
}

.chat-btn i {
  transition: all 0.9s ease;
}

#check:checked ~ .chat-btn i {
  display: block;
  pointer-events: auto;
  transform: rotate(180deg);
}

#check:checked ~ .chat-btn .comment {
  display: none;
}

.chat-btn i {
  font-size: 22px;
  color: #fff !important;
}

.chat-btn {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: blue;
  color: #fff;
  font-size: 22px;
  border: none;
}

.wrapper {
  position: absolute;
  right: 20px;
  bottom: 100px;
  width: 300px;
  background-color: #fff;
  border-radius: 5px;
  opacity: 0;
  transition: all 0.4s;
}

#check:checked ~ .wrapper {
  opacity: 1;
}

.header {
  padding: 13px;
  background-color: blue;
  border-radius: 5px 5px 0px 0px;
  margin-bottom: 10px;
  color: #fff;
}

.chat-form {
  padding: 15px;
}

.chat-form input,
textarea,
button {
  margin-bottom: 10px;
}

.chat-form textarea {
  resize: none;
}

.form-control:focus,
.btn:focus {
  box-shadow: none;
}

.btn,
.btn:focus,
.btn:hover {
  background-color: blue;
  border: blue;
}

#check {
  display: none !important;
}
</style>
