<template>
    <div>
        <div class="blog-container" v-if="!isShow">
            <div class="user-container">
                <h3>
                    We Are The Best Web And App Development Service provider.
                </h3>
                <div>
                    <p>Opened Dec 28, 2019</p>
                    <button @click="showDetail" class="button__main">
                        Answer
                    </button>
                </div>
            </div>
        </div>
        <div class="blog-container" v-if="!isShow">
            <div class="user-container">
                <h3>
                    Impress from the get-go with an interface that looks
                    beautiful on any device. Customize your typeform to be as
                    unique as your brand.
                </h3>
                <p>
                    Impress from the get-go with an interface that looks
                    beautiful on any device. Customize your typeform to be as
                    unique as your brand.
                </p>
            </div>

            <div
                v-for="input in arrayFiltered"
                :key="input.id"
                class="user-container"
            >
                <h4>{{ input.title }}</h4>
                <div v-for="option in input.options" :key="option.id">
                    <label :for="option.id">
                        <input
                            :type="input.type"
                            :id="option.id"
                            :name="option.name"
                            :value="option.value"
                        />{{ option.value }}</label
                    >
                    <br />
                </div>
            </div>

            <div class="user-container">
                <h4>
                    Customer feedback survey template (Business to Business)
                </h4>

                <div class="select-box" @click="toggleDropdown">
                    <p>--Select option--</p>
                    <img src="@/assets/caret-down.svg" />
                </div>
                <div class="select-box option-container" v-if="isShowDropdown">
                    <div class="option-item" @click="selected(1)">option 1</div>
                    <div class="option-item" @click="selected(2)">option 2</div>
                    <div class="option-item" @click="selected(3)">option 3</div>
                </div>
                <p>You can select option</p>
            </div>
            <div class="user-container">
                <h4>Veterinarian patient intake – long form</h4>
                <input
                    type="text"
                    placeholder="Label Name"
                    class="text-input"
                />
                <p>Label name</p>
            </div>
            <div class="user-container">
                <h4>Mobile app feedback</h4>
                <textarea
                    class="text-area-input"
                    placeholder="What are you thinking?"
                ></textarea>
                <p class="character-amount">1000/1000</p>
            </div>
            <div class="user-container">
                <button class="button__main">Submit</button>
                <button>Discard</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {},
    components: {},
    data() {
        return {
            isShow: false,
            isShowDropdown: false,
            inputs: [
                {
                    id: 1,
                    type: "checkbox",
                    title: "Corporate legal training quiz",
                    options: [
                        {
                            id: "training1",
                            name: "Training1",
                            value: "dine in",
                        },
                        {
                            id: "training2",
                            name: "training2",
                            value: "dine in",
                        },
                        {
                            id: "training3",
                            name: "Training3",
                            value: "dine in",
                        },
                    ],
                },
                {
                    id: 2,
                    type: "radio",
                    title: "Adam Grant entry interview",
                    options: [
                        {
                            id: "Dine in",
                            name: "interview",
                            value: "Dine in",
                        },
                        {
                            id: "Dispatch",
                            name: "interview",
                            value: "Dispatch",
                        },
                        {
                            id: "Pick up",
                            name: "interview",
                            value: "Pick up",
                        },
                    ],
                },
                {
                    id: 3,
                    type: "selectOption",
                    title: "Customer feedback survey template (Business to Business)",
                    placeholder: "-- Select option --",
                    note: "You can select option",
                    options: [
                        {
                            name: "option 1",
                        },
                        {
                            name: "option 2",
                        },
                        {
                            name: "option 3",
                        },
                    ],
                },
            ],
        };
    },
    computed: {
        arrayFiltered() {
            return this.inputs.filter(
                (input) => input.type == "checkbox" || input.type == "radio"
            );
        },
    },
    methods: {
        showDetail() {
            this.isShow = !this.isShow;
        },
        toggleDropdown() {
            this.isShowDropdown = !this.isShowDropdown;
        },
        selected(id) {
            this.toggleDropdown();
            console.log(id);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.blog-container {
    background: #fff;
    border: 1px solid #d5d5d5;
    border-radius: 8px;
    position: relative;
    margin-bottom: 24px;
    .user-container {
        padding: 16px;
        border-bottom: 1px solid #d5d5d5;
        h3 {
            margin-bottom: 34px;
            font-weight: 700;
            font-size: 1.125rem;
            line-height: 30px;
        }
        p {
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 24px;
        }

        div {
            display: flex;
            justify-content: space-between;
            p {
                font-weight: 400;
                font-size: 0.813rem;
                line-height: 20px;
                color: #767676;
            }
        }
        .select-box {
            border: 1px solid #e5e5e5;
            border-radius: 4px;
            padding: 8px 8px 8px 12px;
            &:hover {
                cursor: pointer;
            }
        }
        .option-container {
            display: flex;
            flex-direction: column;
            .option-item {
                padding: 8px;

                &:hover {
                    background: rgb(207, 207, 207);
                    cursor: pointer;
                }
            }
        }
        .text-input {
            border: 1px solid #e5e5e5;
            border-radius: 4px;
            padding: 8px 8px 8px 12px;
            width: 100%;
            height: 40px;
            outline: none;
        }
        .text-area-input {
            width: 100%;
            height: 180px;
            border: 1px solid #e5e5e5;
            border-radius: 4px;
            color: #a0a0a0;
            padding: 8px 8px 8px 12px;
            outline: none;
        }
        p {
            font-weight: 400;
            font-size: 13px;
            line-height: 20px;
            color: #5a5a5a;
        }
        .character-amount {
            margin-left: 522px;
        }
    }
}
.button__main {
    padding: 8px 24px;
    border: none;
    background: #007c7c;
    border-radius: 20px;
    color: #ffffff;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 24px;
    cursor: pointer;
}
</style>
