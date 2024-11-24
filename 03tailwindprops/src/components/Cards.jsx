import React from 'react'

function Cards(props) {
    // console.log(props);
    
  return (
    <div>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://img.freepik.com/free-photo/portrait-african-american-man_23-2149072179.jpg" alt="" width="384" height="512" />
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div>
       {props.username || "Vaiju"}
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Cards