<script setup></script>

<template>
  <h2>Horizontal Rules</h2>
  <hr>
  <hr>
  <hr>


  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 7</h6>


  <h2>Emphasis</h2>
  <p><strong>This is bold text</strong></p>
  <p><em>This is italic text</em></p>
  <p><s>This is Strikethrough text</s></p>
  <p>This is <sub>Subscript</sub> text</p>
  <p>This is <sup>Superscript</sup> text</p>
  <p>This is <em>italic and <strong>strong and <s>Strikethrough and <sub>Subscript</sub></s></strong></em></p>


  <h2>Blockquotes</h2>
  <blockquote>
    <p>This is a blockquote</p>
    <blockquote>
      <p>This is a nested blockquote</p>
      <blockquote>
        <p>This is a nested nested blockquote</p>
      </blockquote>
    </blockquote>
  </blockquote>


  <h2>Code</h2>
  <p><code>This is inline code</code></p>

  <pre><code class="language-javascript">const s = "JavaScript syntax highlighting";
alert(s);
</code></pre>

  <pre><code class="language-python">s = "Python syntax highlighting"
print(s)
</code></pre>


  <h2>Lists</h2>
  <h3>Unordered</h3>
  <ul>
    <li>Item 1</li>
    <li>
      Item 2
      <ul>
        <li>
          Item 2a
          <ul>
            <li>Item 2a1</li>
          </ul>
          <ul>
            <li>Item 2a2</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Item 3</li>
  </ul>
  <h3>Ordered</h3>
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>
      Item 3
      <ol>
        <li>Item 3a</li>
        <li>Item 3b</li>
      </ol>
    </li>
  </ol>
  <h3>Start numbering with offset:</h3>
  <ol start="55">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>
  <h3>Nested Tasks List</h3>
  <dl>
    <dt>Term 1</dt>
    <dd>Definition 1</dd>
    <dt>Term 2</dt>
    <dd>Definition 2a</dd>
    <dd>Definition 2b</dd>
  </dl>
  <h3>Tasks List</h3>
  <ul>
    <li>
      <input
        checked=""
        disabled=""
        type="checkbox"
      > foo
      <ul>
        <li><input disabled="" type="checkbox"> bar</li>
        <li>
          <input
            checked=""
            disabled=""
            type="checkbox"
          > baz
        </li>
      </ul>
    </li>
    <li><input disabled="" type="checkbox"> bim</li>
  </ul>

  <h2>Tables</h2>
  <table>
    <thead>
      <tr>
        <th>Option</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>data</td>
        <td>path to data files to supply the data that will be passed into templates.</td>
      </tr>
      <tr>
        <td>engine</td>
        <td>engine to be used for processing templates. Handlebars is the default.</td>
      </tr>
      <tr>
        <td>ext</td>
        <td>extension to be used for dest files.</td>
      </tr>
    </tbody>
  </table>
  <h3>Right aligned columns</h3>
  <table>
    <thead>
      <tr>
        <th align="right">
          Option
        </th>
        <th align="right">
          Description
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td align="right">
          data
        </td>
        <td align="right">
          path to data files to supply the data that will be passed into templates.
        </td>
      </tr>
      <tr>
        <td align="right">
          engine
        </td>
        <td align="right">
          engine to be used for processing templates. Handlebars is the default.
        </td>
      </tr>
      <tr>
        <td align="right">
          ext
        </td>
        <td align="right">
          extension to be used for dest files.
        </td>
      </tr>
    </tbody>
  </table>


  <h2>Links</h2>
  <p><a href="http://github.com">GitHub</a></p>
  <p><a href="http://github.com" title="GitHub">GitHub with title</a></p>
  <p><a href="http://github.com">http://github.com</a></p>
  <p><a href="http://github.com/aisevim">@aisevim</a></p>


  <h2>Images</h2>
  <img
    src="https://octodex.github.com/images/dojocat.jpg"
    alt="Alt text"
    title="The Dojocat"
    width="100"
  >
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
    <img
      alt="Shows an illustrated sun in light mode and a moon with stars in dark mode."
      src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png"
      width="100"
    >
  </picture>

  <h2>Emoji</h2>

  😄 😆 😊 😃 😏 😳
</template>
