<template>
    <section id="add-form">
      <form class="card col-4 mx-auto  p-3 mb-2 bg-secondary text-white">
        <h1>Form Add New Plant</h1>
        <div class="form-group  position-relative">
          <label for="name-add" class="form-label">Nama Tanaman</label>
          <input type="text" class="form-control" id="name-add" />
        </div>
        <div class="form-group  position-relative">
          <label for="description-add" class="form-label">Description</label>
          <textarea class="form-control" id="description-add" rows="3"></textarea>
        </div>
        <div class="form-group  position-relative">
          <label for="imageUrl-add" class="form-label">imageUrl</label>
          <textarea class="form-control" id="imageUrl-add" rows="3"></textarea>
        </div>
        <div class="form-group  position-relative">
          <label id="category" for="category-add" class="form-label">Category</label>

          <select class="form-control news-category col-12 col-sm-6 col-md-4" id="category-add" required>
            <option value="tanaman hias bunga">Tanaman hias Bunga</option>
            <option value="tanaman hias daun">tanaman hias daun</option>
            <option value="tanaman hias akar">tanaman hias akar</option>
            <option value="tanaman hias batang">tanaman hias batang</option>

          </select>
        </div>

       
        <br />

        <button type="submit" class="btn btn-primary">Submit</button>
<button>
<router-link to="/">Back</router-link>
</button>
       
      </form>
    </section>
</template>

<script>
export default {
    name: 'FormAdd'

}
</script>


<style>

</style>