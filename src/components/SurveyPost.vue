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
        <div class="blog-container" v-if="isShow">
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
                v-for="input in selectableInput"
                :key="input.id"
                class="user-container"
            >
                <h4>{{ input.title }}</h4>
                <div v-for="option in input.options" :key="option.id">
                    <label :for="option.id">
                        <input
                            class="input__element"
                            :type="input.type"
                            :id="option.id"
                            :name="option.name"
                            :value="option.value"
                            v-model="input.value"
                            @change="input.validate()"
                        />{{ option.value }}</label
                    >
                    <br />
                </div>
                <p class="error">{{ input.messageError }}</p>
            </div>

            <div class="user-container">
                <h4>
                    Customer feedback survey template (Business to Business)
                </h4>

                <div class="select-box" @click="toggleDropdown">
                    <p>
                        {{
                            inputs[2].value
                                ? inputs[2].value
                                : inputs[2].placeholder
                        }}
                    </p>
                    <img src="@/assets/caret-down.svg" />
                </div>
                <div class="select-box option-container" v-if="isShowDropdown">
                    <div
                        v-for="option in inputs[2].options"
                        :key="option.name"
                        class="option-item"
                        @click="selected(option.name)"
                    >
                        {{ option.name }}
                    </div>
                </div>
                <p>You can select option</p>
                <p class="error">{{ inputs[2].messageError }}</p>
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
                    v-model="inputs[4].value"
                    @input="inputs[4].countCharacter()"
                ></textarea>
                <p class="character-amount">
                    {{ inputs[4].characterAmount }}/1000
                </p>
            </div>
            <div class="user-container">
                <button class="button__main" @click="submit">Submit</button>
                <button class="button__discard">Discard</button>
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
                    value: [],
                    options: [
                        {
                            id: "training1",
                            name: "Training1",
                            value: "dine in 1",
                        },
                        {
                            id: "training2",
                            name: "training2",
                            value: "dine in 2",
                        },
                        {
                            id: "training3",
                            name: "Training3",
                            value: "dine in 3",
                        },
                    ],
                    validate() {
                        if (!this.value.length) {
                            this.showError = true;
                            this.messageError = "please check the box";
                            return;
                        }
                        {
                            this.showError = false;
                            this.messageError = "";
                        }
                    },
                    showError: false,
                    messageError: "",
                },
                {
                    id: 2,
                    type: "radio",
                    title: "Adam Grant entry interview",
                    value: "",
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
                    validate() {
                        if (!this.value) {
                            this.showError = true;
                            this.messageError = "please check the box";
                            return;
                        }
                        {
                            this.showError = false;
                            this.messageError = "";
                        }
                    },
                    showError: false,
                    messageError: "",
                },
                {
                    id: 3,
                    type: "selectOption",
                    title: "Customer feedback survey template (Business to Business)",
                    placeholder: "-- Select option --",
                    note: "You can select option",
                    value: "",
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
                    validate() {
                        if (!this.value) {
                            this.showError = true;
                            this.messageError = "please choose option";
                            return;
                        }
                        {
                            this.showError = false;
                            this.messageError = "";
                        }
                    },
                    showError: false,
                    messageError: "",
                },
                {
                    id: 4,
                    title: "Veterinarian patient intake – long form",
                    validate() {},
                },
                {
                    id: 5,
                    characterTotal: 1000,
                    characterAmount: 1000,
                    value: "",
                    validate() {},

                    countCharacter() {
                        this.characterAmount =
                            this.characterTotal - this.value.length;
                    },
                },
            ],
        };
    },
    computed: {
        selectableInput() {
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
        selected(e) {
            this.toggleDropdown();
            this.inputs[2].value = e;
            this.inputs[2].validate();
        },
        submit() {
            this.inputs.forEach((input) => {
                input.validate();
            });
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
.button__discard {
    padding: 8px 24px;
    border: none;
    background: #e5e5e5;
    border-radius: 20px;
    color: #000;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 24px;
    cursor: pointer;
    margin-left: 8px;
}
input,
textarea,
.select-box {
    margin: 8px 0;
}

input {
    margin-right: 11px;
}

.error {
    color: red !important;
}
</style>
