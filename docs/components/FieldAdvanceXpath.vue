<script setup></script>

<template>
  <table style="width: max-content;">
    <thead>
      <tr>
        <th>Methods</th>
        <th>Examples</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <code><strong>Contains()</strong></code>
        </td>
        <td>
          <table style="width: max-content;">
            <thead>
              <tr>
                <th>Element</th>
                <th>HTML</th>
                <th>XPath</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="submit" />
                </td>
                <td>
                  <code>&lt;input type="submit"&gt;</code>
                </td>
                <td>
                  <strong>//input[contains(@type,"submit")]</strong> <br />
                  <strong>//input[contains(@type,"sub")]</strong> <br />
                  <strong>//*[contains(@type,"mit")]</strong> <br />
                </td>
              </tr>
              <tr>
                <td>
                  <button type="button" name="btn-login">Login</button>
                </td>
                <td>
                  <code>&lt;button type="button" name="btn-login"&gt;Login&lt;/button&gt;</code>
                </td>
                <td>
                  <strong>//button[contains(@name,"btn")]</strong> <br />
                  <strong>//button[contains(text(),"Log")]</strong> <br />
                  <strong>//*[contains(@type,"button")]</strong> <br />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" name="last-name" id="lastName" class="input invalid" placeholder="Last Name" />
                </td>
                <td>
                  <code>&lt;input type="text" name="last-name" id="lastName" class="input invalid" placeholder="Last Name" /&gt;</code>
                </td>
                <td>
                  <strong>//*[@class="input invalid"]</strong> <br />
                  <strong>//input[contains(@class,"invalid")]</strong> <br />
                  <strong>//input[contains(@class,"inv")]</strong> <br />
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <code><strong>OR & AND</strong></code>
        </td>
        <td style="background-color: white">
          <table style="width: max-content;">
            <thead>
              <tr>
                <th>Element</th>
                <th>HTML</th>
                <th>XPath</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <form class="form-login">
                    <label for="inputEmail">Email</label>
                    <input type="email" id="inputEmail" placeholder="Email" />
                    <label for="inputPassword">Password</label>
                    <input type="password" id="inputPassword" placeholder="Password" />
                  </form>
                </td>
                <td>
                  <code>
                    &lt;form class="form-login"&gt; <br />
                    &nbsp; &lt;label for="inputEmail"&gt;Email&lt;/label&gt; <br />
                    &nbsp; &lt;input type="email" id="inputEmail" placeholder="Email" /&gt; <br />
                    &nbsp; &lt;label for="inputPassword"&gt;Password&lt;/label&gt; <br />
                    &nbsp; &lt;input type="password" id="inputPassword" placeholder="Password" /&gt; <br />
                    &lt;/form&gt; <br />
                  </code>
                </td>
                <td>
                  <strong>//form/input[@type="email" or @type="password"]</strong> <br />
                  <strong>//form/input[@type="email" and @id="inputEmail"]</strong> <br />
                  <strong>//form/input[@type="email" and @id]</strong> <br />
                  <strong>//form[@class="form-login"]/input[@id="inputPassword"]</strong> <br />
                  <strong>//form[@class="form-login"]/input[1]</strong> <br />
                  <strong>//form[@class="form-login"]/input[2]</strong> <br />
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <code><strong>starts-with(@attribute,value)</strong></code>
        </td>
        <td>
          <table style="width: max-content;">
            <thead>
              <tr>
                <th>Element</th>
                <th>HTML</th>
                <th>XPath</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button type="button" class="btn-primary">Primary</button>
                  <button type="button" class="btn-secondary">Secondary</button>
                  <button type="button" class="btn-success">Success</button>
                </td>
                <td>
                  <code>
                    &lt;button type="button" class="btn-primary">Primary&lt;/button&gt; <br />
                    &lt;button type="button" class="btn-secondary"&gt;Secondary&lt;/button&gt; <br />
                    &lt;button type="button" class="btn-success"&gt;Success&lt;/button&gt; <br />
                  </code>
                </td>
                <td>
                  <strong>//button[starts-with(@class,"btn")]</strong> <br />
                  <strong>//button[starts-with(@type,"but")]</strong> <br />
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <code><strong>parent, position</strong></code>
        </td>
        <td>
          <table style="width: max-content;">
            <thead>
              <tr>
                <th>XPath</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>//td[text() =' SHG']/parent::*/td[position()=6]/a</strong> <br />
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</template>
