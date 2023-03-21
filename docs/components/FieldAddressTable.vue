<script setup></script>

<template>
  <table style="width: max-content;">
    <thead>
      <tr>
        <th>Element</th>
        <th>HTML</th>
        <th>Selector Query</th>
        <th>XPath</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <input type="text" placeholder="Text" />
          <input type="email" placeholder="Email" />
        </td>
        <td>
          <code>&lt;input type="text"&gt;</code>
          <br />
          <code>&lt;input type="email"&gt;</code>
        </td>
        <td>
          <strong>input[type='text']</strong>
          <br />
          <strong>input[type='email']</strong>
        </td>
        <td>
          <strong>//input[@type="text"]</strong>
          <br />
          <strong>//input[@type="email"]</strong>
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" name="full_name" placeholder="Full Name" />
        </td>
        <td>
          <code>&lt;input name="full_name"&gt;</code>
        </td>
        <td>
          <strong>input[name='full_name']</strong>
        </td>
        <td>
          <strong>//input[@name="full_name"]</strong>
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" id="full_name" placeholder="Full Name" />
        </td>
        <td>
          <code>&lt;input id="full_name"&gt;</code>
        </td>
        <td>
          <strong>input[id='full_name']</strong> <br>
          <strong>input#full_name</strong>
        </td>
        <td>
          <strong>//input[@id="full_name"]</strong>
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" aria-describedby="full_name" placeholder="Full Name" />
        </td>
        <td>
          <code>&lt;input aria-describedby="full_name"&gt;</code>
        </td>
        <td>
          <strong>input[aria-describedby='full_name']</strong>
        </td>
        <td>
          <strong>//input[@aria-describedby="full_name"]</strong>
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" placeholder="Full Name" />
        </td>
        <td>
          <code>&lt;input placeholder="Full Name"&gt;</code>
        </td>
        <td>
          <strong>input[placeholder='Full Name']</strong>
        </td>
        <td>
          <strong>//input[@placeholder="Full Name"]</strong>
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" placeholder="Readonly Field" readonly />
        </td>
        <td>
          <code>&lt;input readonly&gt;</code>
        </td>
        <td>
          <strong>input[readonly]</strong>
        </td>
        <td>
          <strong>//input[@readonly]</strong>
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" placeholder="Disabled Field" disabled />
        </td>
        <td>
          <code>&lt;input disabled&gt;</code>
        </td>
        <td>
          <strong>input[disabled]</strong>
        </td>
        <td>
          <strong>//input[@disabled]</strong>
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" class="input invalid" placeholder="Invalid Value" />
        </td>
        <td>
          <code>&lt;input type="text" class="input invalid"&gt;</code>
        </td>
        <td>
          <strong>input.invalid</strong> <br>
          <strong>input[class='input invalid']</strong> <br>
          <strong>input[class*='invalid']</strong> <br>
        </td>
        <td>
          <strong>//input[@class='input invalid']</strong> <br>
          <strong>//input[contains(@class,"invalid")]</strong> <br>
        </td>
      </tr>
      <tr>
        <td>
          <a href="#" target="_blank">link</a>
        </td>
        <td>
          <code>&lt;a href="#" target="_blank"&gt;link&lt;/a&gt;</code>
        </td>
        <td>
          <strong>a[href]</strong>
          <br />
          <strong>a[href="#"]</strong>
          <br />
          <strong>a[target="_blank"]</strong>
          <br />
        </td>
        <td>
          <strong>//a[@href]</strong>
          <br />
          <strong>//a[@href="#"]</strong>
          <br />
          <strong>//a[@target="_blank"]</strong>
          <br />
          <strong>//a[text()="link"]</strong>
        </td>
      </tr>
      <tr>
        <td>
          <input type="radio" name="gender" value="male" checked /> Male <br />
          <input type="radio" name="gender" value="female" /> Female <br />
          <input type="radio" name="gender" value="other" /> Other <br />
        </td>
        <td>
          <code>&lt;input type="radio" name="gender" value="male" checked&gt; Male</code> <br />
          <code>&lt;input type="radio" name="gender" value="female"&gt; Female</code> <br />
          <code>&lt;input type="radio" name="gender" value="other"&gt; Other</code>
        </td>
        <td>
          <strong>input[type='radio']</strong> <br />
          <strong>input[name="gender"]</strong> <br />
          <strong>input[value="other"]</strong> <br />
          <strong>input[name="gender"][value="other"]</strong> <br />
        </td>
        <td>
          <strong>//input[@type="radio"]</strong> <br />
          <strong>//input[@name="gender"]</strong> <br />
          <strong>//input[@value="other"]</strong> <br />
          <strong>//input[@name="gender"][@value="male"]</strong> <br />
        </td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" name="card1" value="debit" checked /> I have a debit card <br />
          <input type="checkbox" name="card2" value="credit" /> I have a credit card <br />
          <input type="checkbox" name="card3" value="other" /> Other <br />
        </td>
        <td>
          <code>&lt;input type="checkbox" name="card1" value="debit" checked&gt; I have a debit card</code> <br />
          <code>&lt;input type="checkbox" name="card2" value="credit"&gt; I have a credit card</code> <br />
          <code>&lt;input type="checkbox" name="card3" value="other"&gt; Other</code>
        </td>
        <td>
          <strong>input[type='checkbox']</strong> <br />
          <strong>input[name="card1"]</strong> <br />
          <strong>input[value="credit"]</strong> <br />
        </td>
        <td>
          <strong>//input[@type="checkbox"]</strong> <br />
          <strong>//input[@name="card1"]</strong> <br />
          <strong>//input[@value="credit"]</strong> <br />
        </td>
      </tr>
      <tr>
        <td>
          <select name="options">
            <option value="op1">Option 1</option>
            <option value="op2">Option 2</option>
            <option value="op3">Option 3</option>
            <option value="op4">Option 4</option>
          </select>
        </td>
        <td>
          <code>
            &lt;select name="options"&gt; <br />
            &nbsp; &lt;option value="op1"&gt;Option 1&lt;/option&gt; <br />
            &nbsp; &lt;option value="op2"&gt;Option 2&lt;/option&gt; <br />
            &nbsp; &lt;option value="op3"&gt;Option 3&lt;/option&gt; <br />
            &nbsp; &lt;option value="op4"&gt;Option 4&lt;/option&gt; <br />
            &lt;/select&gt; <br />
          </code>
        </td>
        <td><strong>select[name='options']</strong> <br /></td>
        <td>
          <strong>//select[@name='options']</strong> <br />
          <strong>//select[@name="options"]/option[2]</strong> <br />
          <strong>//select[@name="options"]/option[text()="Option 3"]</strong> <br />
          <strong>//select[@name="options"]/option[contains(@value,"op4")]</strong> <br />
        </td>
      </tr>
      <tr>
        <td>
          <textarea name="address" rows="2" cols="20" placeholder="Enter Address"></textarea>
        </td>
        <td>
          <code>&lt;textarea name="address" rows="2" cols="20"&gt;&lt;/textarea&gt;</code>
        </td>
        <td><strong>textarea[name='address']</strong> <br /></td>
        <td>
          <strong>//textarea[@name='address']</strong> <br />
          <strong>//textarea[@rows="2"]</strong> <br />
          <strong>//textarea[@cols="20"]</strong> <br />
        </td>
      </tr>
      <tr>
        <td>
          <input type="submit" value="Submit" />
        </td>
        <td>
          <code> &lt;input type="submit" value="Submit"&gt; </code>
        </td>
        <td>
          <strong>input[type='submit']</strong> <br />
          <strong>input[value='Submit']</strong> <br />
        </td>
        <td>
          <strong>//input[@type='submit']</strong> <br />
          <strong>//input[@value='Submit']</strong> <br />
        </td>
      </tr>
      <tr>
        <td>
          <button type="button" alert onclick="alert('Alert Message')">Alert Dialog</button>
        </td>
        <td>
          <code> &lt;button type="button" alert onclick="alert('Alert Message')"&gt;Alert Dialog&lt;/button&gt; </code>
        </td>
        <td>
          <strong>button[type='button']</strong> <br />
          <strong>button[onclick]</strong> <br />
          <strong>button[alert]</strong> <br />
        </td>
        <td>
          <strong>//button[@type='button']</strong> <br />
          <strong>//button[@onclick]</strong> <br />
          <strong>//button[@alert]</strong> <br />
        </td>
      </tr>
      <tr>
        <td>
          <button type="button" confirm onclick="confirm('Confirm Message')">Confirm Dialog</button>
        </td>
        <td>
          <code> &lt;button type="button" confirm onclick="confirm('Confirm Message')"&gt;Confirm Dialog&lt;/button&gt; </code>
        </td>
        <td>
          <strong>button[type='button']</strong> <br />
          <strong>button[onclick]</strong> <br />
          <strong>button[confirm]</strong> <br />
        </td>
        <td>
          <strong>//button[@type='button']</strong> <br />
          <strong>//button[@onclick]</strong> <br />
          <strong>//button[@confirm]</strong> <br />
        </td>
      </tr>
      <tr>
        <td>
          <button type="button" id="prompt" prompt onclick="prompt('Please enter you age:')">Prompt Dialog</button>
        </td>
        <td>
          <code> &lt;button type="button" id="prompt" prompt onclick="prompt('Please enter you age:')"&gt;Prompt Dialog&lt;/button&gt; </code>
        </td>
        <td>
          <strong>button[type='button']</strong> <br />
          <strong>button[id='prompt']</strong> <br />
          <strong>button[prompt]</strong> <br />
        </td>
        <td>
          <strong>//button[@type='button']</strong> <br />
          <strong>//button[@id='prompt']</strong> <br />
          <strong>//button[@prompt]</strong> <br />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
input,
textarea,
button {
  display: block;
  padding: 0.375rem 0.75rem;
  margin-bottom: 8px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
}

input[type="radio"],
input[type="checkbox"] {
  display: inherit;
}

input[type="submit"] {
  cursor: pointer;
}

select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  appearance: none;
}

.invalid {
  border: 1px solid #d64a1f;
}
</style>
