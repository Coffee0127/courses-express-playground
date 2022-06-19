$(document).ready(() => {
  const $courses = $('#courses')

  const createElement = (tag, cssClass, content) => {
    return $(document.createElement(tag))
      .addClass(cssClass)
      .text(content)
  }

  const createCourse = course => {
    const courseHeader = createElement('div', 'course-header')
    const courseName = createElement('span', 'course-name', course.name)
    const courseCredit = createElement('span', 'course-credit', `${course.credit} Credit`)
    const courseBody = createElement('div', 'course-body', course.description)
    courseHeader.append(courseName).append(courseCredit)
    const wrapper = createElement('div', 'course')
    wrapper.append(courseHeader).append(courseBody).appendTo($courses)
  }

  $.ajax('/courses')
    .done(courses => {
      for (const [_, course] of Object.entries(courses)) {
        createCourse(course)
      }
    })
})
