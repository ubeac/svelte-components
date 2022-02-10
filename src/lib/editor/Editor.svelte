<script>
  import { onMount } from "svelte";
  import "quill/dist/quill.snow.css";

  let className = "";
  export { className as class };

  let editor;
  let quill;

  export let options = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
  ];

  export let value = "";

  $: {
    if (quill && value !== quill.root.innerHTML) {
      quill.root.innerHTML = value;
    }
  }

  function change(e) {
    value = quill.root.innerHTML;
  }

  onMount(async () => {
    const Quill = await import("quill");

    quill = new Quill.default(editor, {
      theme: "snow",
      modules: {
        toolbar: options,
        // toolbar: [
        //     ['bold', 'italic', 'underline', 'strike'],
        //     // ['blockquote', 'code-block'],
        //     // [{ 'header': 1 }, { 'header': 2 }],
        //     // [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        //     // [{ 'script': 'sub'}, { 'script': 'super' }],
        //     [{ indent: "-1" }, { indent: "+1" }],
        //     // [{ 'direction': 'rtl' }],
        //     // [{ 'size': ['small', false, 'large', 'huge'] }],
        //     [{ header: [1, 2, 3, 4, 5, 6, false] }],
        //     // [{ 'color': [] }, { 'background': [] }],
        //     [{ font: [] }],
        //     [{ align: [] }]
        //     // ['clean']
        // ]
      },
    });

    quill.on("text-change", change);

    return () => {
      quill.off("text-change", change);
      quill.enable(false);
    };
  });
</script>

<div bind:this={editor} class="h-32 {className}" />
