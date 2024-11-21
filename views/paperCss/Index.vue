<!--
 * @Description: 
 * @Author: huhaonan@sics.ac.cn
 * @Date: 2021-12-10 17:00:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-21 16:00:23
-->
<template>
  <h3>Simple alerts</h3>
  <div class="row flex-spaces">
    <div class="alert alert-primary">Alert-primary</div>
    <div class="alert alert-secondary">Alert-secondary</div>
    <div class="alert alert-success">Alert-success</div>
    <div class="alert alert-warning">Alert-warning</div>
    <div class="alert alert-danger">Alert-danger</div>
  </div>

  <h3>Dismissible alerts</h3>
  <div class="row flex-spaces">
    <input class="alert-state" id="alert-1" type="checkbox" />
    <div class="alert alert-primary dismissible">
      Alert-primary
      <label class="btn-close" for="alert-1">X</label>
    </div>
    <input class="alert-state" id="alert-2" type="checkbox" />
    <div class="alert alert-secondary dismissible">
      Alert-secondary
      <label class="btn-close" for="alert-2">X</label>
    </div>
    <input class="alert-state" id="alert-3" type="checkbox" />
    <div class="alert alert-success dismissible">
      Alert-success
      <label class="btn-close" for="alert-3">X</label>
    </div>
    <input class="alert-state" id="alert-4" type="checkbox" />
    <div class="alert alert-warning dismissible">
      Alert-warning
      <label class="btn-close" for="alert-4">X</label>
    </div>
    <input class="alert-state" id="alert-5" type="checkbox" />
    <div class="alert alert-danger dismissible">
      Alert-danger
      <label class="btn-close" for="alert-5">X</label>
    </div>
  </div>

  <article class="article">
    <h1 class="article-title"><a href="">Article Title</a></h1>
    <p class="article-meta">
      Written by
      <a href="#">Super User</a>
    </p>
    <p class="text-lead">Lorem...</p>
    <p>Lorem...</p>
    <div class="row">
      <button>Read More</button>
      <button>5 Comments</button>
    </div>
  </article>

  <h3>Badges</h3>
  <h1>
    Example h1 heading
    <span class="badge">123</span>
  </h1>
  <h2>
    Example h2 heading
    <span class="badge secondary">123</span>
  </h2>
  <h3>
    Example h3 heading
    <span class="badge success">123</span>
  </h3>
  <h4>
    Example h4 heading
    <span class="badge warning">123</span>
  </h4>
  <h5>
    Example h5 heading
    <span class="badge danger">123</span>
  </h5>
  <h6>
    Example h6 heading
    <span class="badge">123</span>
  </h6>

  <h3>Breadcrumb</h3>
  <ul class="breadcrumb border">
    <li><a href="#">Documentation</a></li>
    <li><a href="#">Components</a></li>
    <li>Breadcrumb</li>
  </ul>

  <h3>Buttons</h3>
  <p>
    Inspired by
    <a href="https://codepen.io/tmrDevelops/pen/VeRvKX" target="_blank">
      Imperfect Buttons
    </a>
  </p>
  <button class="btn-large">Large</button>
  <button>Default</button>
  <button class="btn-small">Small</button>
  <a href="#" class="paper-btn">Link</a>
  <div class="row">
    <div class="col-6 col">
      <button class="btn-block">Block level</button>
    </div>
  </div>
  <button class="disabled">Disabled</button>
  <button disabled>Disabled</button>
  <!-- colors -->
  <input type="button" class="paper-btn btn-primary" value="Primary" />
  <input type="button" class="btn-secondary" value="Secondary" />
  <button class="btn-success">Success</button>
  <button class="btn-warning">Warning</button>
  <button class="btn-danger">Danger</button>
  <!-- Outline colors -->
  <input type="button" class="paper-btn btn-primary-outline" value="Primary" />
  <input type="button" class="btn-secondary-outline" value="Secondary" />
  <button class="btn-success-outline">Success</button>
  <button class="btn-warning-outline">Warning</button>
  <a href="#" class="paper-btn btn-danger-outline">Danger</a>

  <h3>Cards</h3>
  <div class="card" style="width: 20rem">
    <img src="https://picsum.photos/768" alt="Card example image" />
    <div class="card-body">
      <h4 class="card-title">My awesome Paper card!</h4>
      <h5 class="card-subtitle">Nice looking subtitle.</h5>
      <p class="card-text">
        Notice that the card width in this example have been set to 20rem,
        otherwise it will try to fill the current container/row where the card
        is.
      </p>
      <button>Let me go here!</button>
    </div>
  </div>

  <div class="card" style="width: 20rem">
    <div class="card-body">
      <h4 class="card-title">My awesome Paper card!</h4>
      <h5 class="card-subtitle">Nice looking subtitle.</h5>
      <p class="card-text">
        This is another example of a card without image. Cards are also meant to
        be used without images, but with text/links/buttons.
      </p>
      <a class="card-link" href="#">First link</a>
      <a class="card-link" href="#">Second link</a>
    </div>
  </div>

  <div class="card" style="width: 20rem">
    <div class="card-body">
      <h4 class="card-title">My awesome Paper card!</h4>
      <h5 class="card-subtitle">Nice looking subtitle.</h5>
      <p class="card-text">
        You can also place image on the bottom of the card.
      </p>
      <button>Let me go here!</button>
    </div>
    <img
      class="image-bottom"
      src="https://unsplash.it/550/250"
      alt="Card example image"
    />
  </div>

  <div class="card" style="width: 20rem">
    <div class="card-header">Header</div>
    <div class="card-body">
      <h4 class="card-title">My awesome Paper card!</h4>
      <h5 class="card-subtitle">Nice looking subtitle.</h5>
      <p class="card-text">
        You can also place image on the bottom of the card.
      </p>
      <button>Let me go here!</button>
    </div>
    <div class="card-footer">Footer</div>
  </div>

  <h3>Collapsibles 折叠面板</h3>
  <div class="row">
    <div class="collapsible">
      <input id="collapsible1" type="checkbox" name="collapsible" />
      <label for="collapsible1">First</label>
      <div class="collapsible-body">
        <span>
          Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick
          fatback boudin ball tip turducken...
        </span>
      </div>
    </div>
    <div class="collapsible">
      <input id="collapsible2" type="checkbox" name="collapsible" />
      <label for="collapsible2">Second</label>
      <div class="collapsible-body">
        <span>
          Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage
          pig leberkas, t-bone sirloin shoulder bresaola...
        </span>
      </div>
    </div>
    <div class="collapsible">
      <input id="collapsible3" type="checkbox" name="collapsible" />
      <label for="collapsible3">Third</label>
      <div class="collapsible-body">
        <span>
          Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick
          fatback boudin ball tip turducken...
        </span>
      </div>
    </div>
    <div class="collapsible">
      <input id="collapsible4" type="checkbox" name="collapsible" />
      <label for="collapsible4">Fourth</label>
      <div class="collapsible-body">
        <span>
          Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage
          pig leberkas, t-bone sirloin shoulder bresaola...
        </span>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="collapsible">
      <input id="collapsible5" type="radio" name="collapsible" />
      <label for="collapsible5">First</label>
      <div class="collapsible-body">
        <span>
          Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick
          fatback boudin ball tip turducken...
        </span>
      </div>
    </div>
    <div class="collapsible">
      <input id="collapsible6" type="radio" name="collapsible" />
      <label for="collapsible6">Second</label>
      <div class="collapsible-body">
        <span>
          Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage
          pig leberkas, t-bone sirloin shoulder bresaola...
        </span>
      </div>
    </div>
    <div class="collapsible">
      <input id="collapsible7" type="radio" name="collapsible" />
      <label for="collapsible7">Third</label>
      <div class="collapsible-body">
        <span>
          Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick
          fatback boudin ball tip turducken...
        </span>
      </div>
    </div>
    <div class="collapsible">
      <input id="collapsible8" type="radio" name="collapsible" />
      <label for="collapsible8">Fourth</label>
      <div class="collapsible-body">
        <span>
          Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage
          pig leberkas, t-bone sirloin shoulder bresaola...
        </span>
      </div>
    </div>
  </div>

  <h3>modal</h3>
  <div class="row flex-spaces child-borders">
    <label class="paper-btn margin" for="modal-1">Open Modal!</label>
  </div>
  <input class="modal-state" id="modal-1" type="checkbox" />
  <div class="modal">
    <label class="modal-bg" for="modal-1"></label>
    <div class="modal-body">
      <label class="btn-close" for="modal-1">X</label>
      <h4 class="modal-title">Modal Title</h4>
      <h5 class="modal-subtitle">Modal Subtitle</h5>
      <p class="modal-text">
        This is an example of modal which is implemented with pure CSS! :D
      </p>
      <label for="modal-1">Nice!</label>
    </div>
  </div>

  <div class="row flex-spaces child-borders">
    <label class="paper-btn margin" for="modal-2">Another Modal!</label>
  </div>
  <input class="modal-state" id="modal-2" type="checkbox" />
  <div class="modal">
    <label class="modal-bg" for="modal-2"></label>
    <div class="modal-body">
      <label class="btn-close" for="modal-2">X</label>
      <h4 class="modal-title">Modal Title</h4>
      <h5 class="modal-subtitle">Modal Subtitle</h5>
      <p class="modal-text">
        This is another example of modal which is implemented with pure CSS! :D
      </p>
      <a href="/#download">Get PaperCSS</a>
      <label for="modal-2" class="modal-link">Close</label>
    </div>
  </div>
</template>
