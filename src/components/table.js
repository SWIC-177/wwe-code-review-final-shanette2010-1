export default function Table({ col1, col2, col1Header, col2Header }) {
  return `
    <table class="container mx-auto text-left max-w-fit divide-y divide-dashed [&_tr:not(:last-child)]:border-b [&_tr]:border-dotted last:border-none">
      <tr class="uppercase !border-none">
        <th>${col1Header}</th>
        <th>${col2Header}</th>
      </tr>
      ${col1
        .map(
          (item, index) => `
        <tr>
          <td class="pr-8 py-4">${item}</td>
          <td>${col2[index] || ""}</td>
        </tr>
      `,
        )
        .join("")}
    </table>
  `;
}
