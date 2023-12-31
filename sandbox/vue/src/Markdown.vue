<script setup></script>

<template>
  <h2>Horizontal Rules</h2>
  <hr>
  <hr>
  <hr>


  <h1>h1 Heading :clap:</h1>
  <h2>h2 Heading</h2>
  <h3>h3 Heading</h3>
  <h4>h4 Heading</h4>
  <h5>h5 Heading</h5>
  <h6>h6 Heading</h6>


  <h2>Emphasis</h2>
  <p><strong>This is bold text</strong></p>
  <p><em>This is italic text</em></p>
  <p><s>This is Strikethrough text</s></p>
  <p>This is <sub>Subscript</sub> text</p>
  <p>This is <sup>Superscript</sup> text</p>
  <p>This is <em>italic and <strong>strong and <s>Strikethrough and <sub>Subscript</sub></s></strong></em></p>


  <h2>Blockquotes</h2>
  <blockquote>
    <p>Blockquotes can also be nested…</p>
    <blockquote>
      <p>…by using additional greater-than signs right next to each other…</p>
      <blockquote>
        <p>…or with spaces between arrows.</p>
      </blockquote>
    </blockquote>
  </blockquote>


  <h2>Code</h2>
  <p>Inline <code>code</code></p>
  <p>Indented code</p>

  <pre><code>// Some comments
line 1 of code
line 2 of code
line 3 of code
</code></pre>

  <p>Syntax highlighting</p>
  <pre><code class="language-ruby">def foo(x)
  return 3
end
</code></pre>

  <pre class="hljs language-js"><code><span class="hljs-keyword">var</span> foo = <span class="hljs-keyword">function</span> (<span class="hljs-params">bar</span>) {
  <span class="hljs-keyword">return</span> bar++;
};

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title function_">foo</span>(<span class="hljs-number">5</span>));
</code></pre>

  <pre class="language-js"><code>const foo = 'text';
console.log(foo);</code></pre>


  <h2>Lists</h2>
  <h3>Unordered</h3>
  <ul>
    <li>Create a list by starting a line with <code>+</code>, <code>-</code>, or <code>*</code></li>
    <li>
      Sub-lists are made by indenting 2 spaces:
      <ul>
        <li>
          Marker character change forces new list start:
          <ul>
            <li>Ac tristique libero volutpat at</li>
          </ul>
          <ul>
            <li>Facilisis in pretium nisl aliquet</li>
          </ul>
          <ul>
            <li>Nulla volutpat aliquam velit</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Very easy!</li>
  </ul>
  <h3>Ordered</h3>
  <ol>
    <li>
      <p>Lorem ipsum dolor sit amet</p>
    </li>
    <li>
      <p>Consectetur adipiscing elit</p>
    </li>
    <li>
      <p>Integer molestie lorem at massa</p>
    </li>
    <li>
      <p>You can use sequential numbers…</p>
    </li>
    <li>
      <p>…or keep all the numbers as <code>1.</code></p>
    </li>
  </ol>
  <h3>Start numbering with offset:</h3>
  <ol start="57">
    <li>foo</li>
    <li>bar</li>
  </ol>
  <h3>Definition lists</h3>
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
  <p>Right aligned columns</p>
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
  <p><a href="http://dev.nodeca.com">link text</a></p>
  <p><a href="http://nodeca.github.io/pica/demo/" title="title text!">link with title</a></p>


  <h2>Images</h2>
  <p>
    <img
      src="https://octodex.github.com/images/dojocat.jpg"
      alt="Alt text"
      title="The Dojocat"
      width="100"
    >
  </p>
  <p>Specifying the theme:</p>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
    <img
      alt="Shows an illustrated sun in light mode and a moon with stars in dark mode."
      src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png"
      width="100"
    >
  </picture>
</template>
